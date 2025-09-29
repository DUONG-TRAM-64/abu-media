# 🔒 Hướng Dẫn Bảo Vệ Mã Code và API Keys

## 1. Bảo Vệ API Keys và Thông Tin Nhạy Cảm

### 1.1 Sử Dụng Environment Variables
```bash
# Tạo file .env.local (hoặc .env)
GOOGLE_AI_API_KEY=your_actual_api_key_here
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 1.2 Cấu Hình .gitignore
Đảm bảo file `.gitignore` của bạn bao gồm:
```gitignore
# Environment variables
.env*
!.env.example

# API keys và secrets
*.key
*.pem
config/secrets.json

# Database
*.db
*.sqlite

# Logs có thể chứa thông tin nhạy cảm
*.log
logs/

# Backup files
*.backup
*.bak
```

### 1.3 Tạo File .env.example
```bash
# Copy file này thành .env và điền thông tin thực tế
GOOGLE_AI_API_KEY=your_google_ai_api_key
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret_minimum_32_characters
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## 2. Validation và Error Handling

### 2.1 Kiểm Tra API Keys
```typescript
// utils/env-validation.ts
export function validateEnvironmentVariables() {
  const requiredEnvVars = [
    'GOOGLE_AI_API_KEY',
    'DATABASE_URL',
    'JWT_SECRET'
  ];
  
  const missingVars = requiredEnvVars.filter(
    varName => !process.env[varName]
  );
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}
```

### 2.2 Secure API Route Handler
```typescript
// app/api/secure/route.ts
import { validateEnvironmentVariables } from '@/utils/env-validation';

export async function POST(request: Request) {
  try {
    // Validate environment variables first
    validateEnvironmentVariables();
    
    const apiKey = process.env.GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }
    
    // Your API logic here
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## 3. Git Security Best Practices

### 3.1 Kiểm Tra Commit Trước Khi Push
```bash
# Tạo pre-commit hook
# Tạo file .git/hooks/pre-commit

#!/bin/sh
echo "Checking for sensitive data..."

# Kiểm tra API keys, passwords, tokens
if git diff --cached --name-only | xargs grep -l "api_key\|password\|secret\|token" 2>/dev/null; then
    echo "⚠️  Warning: Potential sensitive data detected!"
    echo "Files contain sensitive keywords. Please review:"
    git diff --cached --name-only | xargs grep -l "api_key\|password\|secret\|token" 2>/dev/null
    exit 1
fi

echo "✅ No sensitive data detected"
```

### 3.2 Sử Dụng Git-secrets
```bash
# Cài đặt git-secrets (Windows)
# Tải từ: https://github.com/awslabs/git-secrets

# Cấu hình patterns để detect
git secrets --register-aws
git secrets --add 'api_key["\s]*[:=]["\s]*[A-Za-z0-9]+'
git secrets --add 'secret["\s]*[:=]["\s]*[A-Za-z0-9]+'
```

## 4. Code Obfuscation và Minification

### 4.1 Next.js Build Configuration
```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minify code in production
  swcMinify: true,
  
  // Remove console.logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 4.2 Package.json Scripts
```json
{
  "scripts": {
    "build:secure": "next build && npm run security-check",
    "security-check": "npm audit && echo 'Security check completed'",
    "clean-build": "rm -rf .next && npm run build",
    "prebuild": "npm run env-check",
    "env-check": "node scripts/check-env.js"
  }
}
```

## 5. Deployment Security

### 5.1 Vercel Environment Variables
```bash
# Sử dụng Vercel CLI
vercel env add GOOGLE_AI_API_KEY production
vercel env add DATABASE_URL production
vercel env add JWT_SECRET production
```

### 5.2 Production Checklist
- [ ] Tất cả API keys được lưu trong environment variables
- [ ] File .env không được commit vào Git
- [ ] Có file .env.example với giá trị mẫu
- [ ] Console.logs đã bị loại bỏ trong production
- [ ] Error messages không expose sensitive information
- [ ] HTTPS được sử dụng cho tất cả APIs
- [ ] Rate limiting được implement cho APIs
- [ ] Input validation được thực hiện

## 6. Monitoring và Logging

### 6.1 Secure Logging
```typescript
// utils/logger.ts
export class SecureLogger {
  static log(message: string, data?: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(message, this.sanitize(data));
    }
  }
  
  static error(message: string, error?: any) {
    console.error(message, this.sanitize(error));
  }
  
  private static sanitize(data: any) {
    if (!data) return data;
    
    const sensitiveKeys = ['password', 'secret', 'key', 'token'];
    const sanitized = JSON.parse(JSON.stringify(data));
    
    function maskSensitive(obj: any) {
      for (const key in obj) {
        if (sensitiveKeys.some(k => key.toLowerCase().includes(k))) {
          obj[key] = '***MASKED***';
        } else if (typeof obj[key] === 'object') {
          maskSensitive(obj[key]);
        }
      }
    }
    
    maskSensitive(sanitized);
    return sanitized;
  }
}
```

## 7. Code Review Checklist

### Trước Khi Share Code:
- [ ] Xóa tất cả hardcoded API keys
- [ ] Thay thế sensitive data bằng environment variables
- [ ] Kiểm tra commit history có chứa sensitive data không
- [ ] Test với environment variables
- [ ] Cập nhật documentation
- [ ] Review .gitignore file

### Trước Khi Deploy:
- [ ] Run security audit: `npm audit`
- [ ] Check environment variables trên production
- [ ] Test error handling
- [ ] Verify HTTPS configuration
- [ ] Monitor logs for sensitive data leakage

## 8. Emergency Response

### Nếu Accidental Commit API Key:
```bash
# 1. Immediately revoke the exposed key
# 2. Generate new API key
# 3. Update environment variables
# 4. Remove from git history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch path/to/sensitive/file' \
  --prune-empty --tag-name-filter cat -- --all

# 5. Force push (chỉ nếu bạn chắc chắn)
git push origin --force --all
```

---

## 🔧 Tools Hỗ Trợ
- **Git-secrets**: Detect secrets trong commits
- **TruffleHog**: Scan git history cho secrets  
- **npm audit**: Security vulnerability check
- **ESLint security rules**: Code analysis
- **Vercel/Netlify**: Secure environment variable management
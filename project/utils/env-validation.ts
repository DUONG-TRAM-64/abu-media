/**
 * Environment Variables Validation Utility
 * Kiểm tra và validate các environment variables cần thiết
 */

interface EnvConfig {
  GOOGLE_AI_API_KEY?: string;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
  NEXTAUTH_SECRET?: string;
  NODE_ENV?: string;
}

/**
 * Danh sách các environment variables bắt buộc
 */
const REQUIRED_ENV_VARS = [
  'GOOGLE_AI_API_KEY',
] as const;

/**
 * Danh sách các environment variables tùy chọn
 */
const OPTIONAL_ENV_VARS = [
  'DATABASE_URL',
  'JWT_SECRET', 
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
  'STRIPE_SECRET_KEY',
  'SENDGRID_API_KEY',
] as const;

/**
 * Kiểm tra tất cả environment variables cần thiết
 */
export function validateEnvironmentVariables(): EnvConfig {
  const missingVars: string[] = [];
  const config: EnvConfig = {};

  // Kiểm tra các biến bắt buộc
  for (const varName of REQUIRED_ENV_VARS) {
    const value = process.env[varName];
    if (!value || value.trim() === '') {
      missingVars.push(varName);
    } else {
      config[varName] = value;
    }
  }

  // Kiểm tra các biến tùy chọn
  for (const varName of OPTIONAL_ENV_VARS) {
    const value = process.env[varName];
    if (value && value.trim() !== '') {
      config[varName as keyof EnvConfig] = value;
    }
  }

  // Throw error nếu thiếu biến bắt buộc
  if (missingVars.length > 0) {
    throw new Error(
      `❌ Missing required environment variables: ${missingVars.join(', ')}\n` +
      `Please check your .env.local file and ensure all required variables are set.\n` +
      `See .env.example for reference.`
    );
  }

  return config;
}

/**
 * Kiểm tra một environment variable cụ thể
 */
export function getEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name];
  
  if (!value || value.trim() === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${name} is not set`);
  }
  
  return value;
}

/**
 * Kiểm tra environment variable có phải boolean không
 */
export function getEnvBool(name: string, defaultValue = false): boolean {
  const value = process.env[name];
  
  if (!value || value.trim() === '') {
    return defaultValue;
  }
  
  return value.toLowerCase() === 'true';
}

/**
 * Kiểm tra environment variable có phải number không
 */
export function getEnvNumber(name: string, defaultValue?: number): number {
  const value = process.env[name];
  
  if (!value || value.trim() === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${name} is not set`);
  }
  
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Environment variable ${name} is not a valid number: ${value}`);
  }
  
  return parsed;
}

/**
 * Log thông tin environment (ẩn sensitive data)
 */
export function logEnvironmentInfo() {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 Environment Variables Status:');
    
    for (const varName of REQUIRED_ENV_VARS) {
      const value = process.env[varName];
      const status = value ? '✅' : '❌';
      const maskedValue = value ? `${value.substring(0, 4)}***` : 'Not set';
      console.log(`  ${status} ${varName}: ${maskedValue}`);
    }
    
    for (const varName of OPTIONAL_ENV_VARS) {
      const value = process.env[varName];
      if (value) {
        const maskedValue = `${value.substring(0, 4)}***`;
        console.log(`  ⚪ ${varName}: ${maskedValue}`);
      }
    }
  }
}

/**
 * Utility để sanitize logs (loại bỏ sensitive data)
 */
export function sanitizeForLog(obj: any): any {
  if (!obj) return obj;
  
  const sensitiveKeys = [
    'password', 'secret', 'key', 'token', 'api_key', 
    'private_key', 'auth', 'credential'
  ];
  
  const sanitized = JSON.parse(JSON.stringify(obj));
  
  function maskSensitive(target: any) {
    for (const key in target) {
      if (typeof target[key] === 'string') {
        const lowerKey = key.toLowerCase();
        if (sensitiveKeys.some(sensitive => lowerKey.includes(sensitive))) {
          target[key] = target[key].length > 8 
            ? `${target[key].substring(0, 4)}***${target[key].substring(target[key].length - 4)}`
            : '***HIDDEN***';
        }
      } else if (typeof target[key] === 'object' && target[key] !== null) {
        maskSensitive(target[key]);
      }
    }
  }
  
  maskSensitive(sanitized);
  return sanitized;
}
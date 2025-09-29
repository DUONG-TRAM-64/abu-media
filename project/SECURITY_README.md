# 🔒 Quick Security Setup

## 1. Thiết Lập Environment Variables

```bash
# 1. Copy template
cp .env.example .env.local

# 2. Điền thông tin thực tế vào .env.local
# GOOGLE_AI_API_KEY=your_actual_api_key_here
```

## 2. Kiểm Tra Bảo Mật

```bash
# Kiểm tra environment variables
npm run env-check

# Kiểm tra bảo mật toàn diện  
npm run security-check

# Build với kiểm tra bảo mật
npm run build:secure
```

## 3. Cài Đặt Git Hook (Tùy chọn)

```bash
# Windows (PowerShell)
copy scripts\pre-commit-hook.sh .git\hooks\pre-commit

# macOS/Linux
cp scripts/pre-commit-hook.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## 4. Trước Khi Chia Sẻ Code

### ✅ Checklist:
- [ ] Tất cả API keys đã được moved vào `.env.local`
- [ ] File `.env*` đã có trong `.gitignore`
- [ ] Đã chạy `npm run security-check`
- [ ] Không có hardcoded secrets trong code
- [ ] Đã test với environment variables

### 🚫 KHÔNG BAO GIỜ commit:
- `.env` hoặc `.env.local` files
- API keys, passwords, secrets
- Database connection strings
- Private keys (.key, .pem files)

## 5. Emergency: Nếu Đã Commit Sensitive Data

```bash
# 1. Ngay lập tức revoke API key đã expose
# 2. Tạo API key mới
# 3. Cập nhật .env.local
# 4. Xóa khỏi git history (nếu cần thiết)
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch path/to/sensitive/file' \
  --prune-empty --tag-name-filter cat -- --all
```

## 📚 Tài Liệu Chi Tiết

Xem `SECURITY_GUIDE.md` để có hướng dẫn đầy đủ về bảo mật code.
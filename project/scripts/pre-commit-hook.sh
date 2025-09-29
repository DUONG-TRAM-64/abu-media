#!/bin/sh
# Pre-commit hook to check for sensitive data
# Đặt file này vào .git/hooks/pre-commit và chmod +x

echo "🔍 Checking for sensitive data before commit..."

# Danh sách patterns cần kiểm tra
SENSITIVE_PATTERNS=(
    "api_key[\"'\s]*[:=][\"'\s]*[A-Za-z0-9]+"
    "secret[\"'\s]*[:=][\"'\s]*[A-Za-z0-9]+"
    "password[\"'\s]*[:=][\"'\s]*[A-Za-z0-9]+"
    "token[\"'\s]*[:=][\"'\s]*[A-Za-z0-9]+"
    "private_key"
    "-----BEGIN.*PRIVATE KEY-----"
)

# Kiểm tra files được staged
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED_FILES" ]; then
    echo "✅ No staged files to check"
    exit 0
fi

FOUND_SENSITIVE=false

echo "📁 Checking staged files:"
for file in $STAGED_FILES; do
    echo "  - $file"
    
    # Skip binary files
    if file "$file" | grep -q "binary"; then
        continue
    fi
    
    # Skip if file doesn't exist (deleted)
    if [ ! -f "$file" ]; then
        continue
    fi
    
    # Check each sensitive pattern
    for pattern in "${SENSITIVE_PATTERNS[@]}"; do
        if git diff --cached "$file" | grep -qiE "$pattern"; then
            echo "⚠️  Warning: Potential sensitive data found in $file"
            echo "   Pattern matched: $pattern"
            FOUND_SENSITIVE=true
        fi
    done
done

# Kiểm tra .env files
ENV_FILES=$(echo "$STAGED_FILES" | grep -E "\.env(\.|$)")
if [ -n "$ENV_FILES" ]; then
    echo "🚨 ERROR: Environment files detected in staged changes:"
    echo "$ENV_FILES"
    echo ""
    echo "Environment files should NOT be committed to version control!"
    echo "Please unstage these files:"
    echo "  git reset HEAD $ENV_FILES"
    echo ""
    exit 1
fi

# Kiểm tra hardcoded localhost URLs
LOCALHOST_PATTERNS="https?://localhost|127\.0\.0\.1"
for file in $STAGED_FILES; do
    if [ -f "$file" ] && file "$file" | grep -q "text"; then
        if git diff --cached "$file" | grep -qiE "$LOCALHOST_PATTERNS"; then
            echo "⚠️  Warning: Hardcoded localhost URL found in $file"
            echo "   Consider using environment variables for URLs"
        fi
    fi
done

if [ "$FOUND_SENSITIVE" = true ]; then
    echo ""
    echo "🚨 Sensitive data detected in staged files!"
    echo ""
    echo "Please review the flagged content and either:"
    echo "1. Remove the sensitive data"
    echo "2. Move it to environment variables"  
    echo "3. If it's a false positive, commit with --no-verify"
    echo ""
    echo "To bypass this check (use carefully):"
    echo "  git commit --no-verify"
    echo ""
    exit 1
fi

echo "✅ No sensitive data detected in staged files"
echo "🚀 Proceeding with commit..."
exit 0
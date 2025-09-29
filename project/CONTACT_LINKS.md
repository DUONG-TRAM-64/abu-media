# 📱 Cấu hình các link liên hệ social media

## 📍 File cần thay đổi

`features/contact/contact-methods-section.tsx`

## 🔗 Các link cần cập nhật

Trong file trên, tìm object `contactLinks` và thay thế các placeholder links:

```typescript
const contactLinks = {
  zalo: "https://zalo.me/your-zalo-link", // 👈 Thay bằng link Zalo thực tế
  facebook: "https://facebook.com/your-page", // 👈 Thay bằng link Facebook thực tế
  tiktok: "https://tiktok.com/@your-account", // 👈 Thay bằng link TikTok thực tế
  youtube: "https://youtube.com/@your-channel", // 👈 Thay bằng link YouTube thực tế
};
```

## 📝 Hướng dẫn lấy link

### Zalo:

- Mở app Zalo Business
- Vào **Trang cá nhân** → **Cài đặt** → **Liên kết Zalo**
- Copy link chia sẻ

### Facebook:

- Vào Fanpage Facebook
- Click **Chia sẻ** → **Sao chép liên kết**

### TikTok:

- Vào profile TikTok
- Click **Chia sẻ** → **Sao chép liên kết**

### YouTube:

- Vào kênh YouTube
- Click **Chia sẻ kênh** → **Sao chép**

## 📞 Thông tin liên hệ khác

Cũng trong file này, cập nhật:

- **Địa chỉ**: Dòng "Số XX, Đường ABC..."
- **Điện thoại**: href="tel:+84123456789"
- **Email**: href="mailto:info@novamedia.vn"

## ✅ Kiểm tra sau khi cập nhật

- [ ] Các link mở đúng trang/app
- [ ] Thông tin liên hệ chính xác
- [ ] Test trên cả desktop và mobile

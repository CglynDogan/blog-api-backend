# Blog API Backend -

Express.js ve MongoDB (Mongoose) kullanarak geliştirilen backend projesi.

## Proje Açıklaması

Bu proje, backend geliştirme temellerini öğrenmek amacıyla oluşturulmuştur. Express ile REST API oluşturmayı, MongoDB ile veri yönetimini ve middleware konseptlerini pratik etmek için kullanılmaktadır ve tamamiyle tekrar amaçlıdır.

## Proje Yapısı

```
├── index.js                 # Ana sunucu dosyası
├── .env                     # Ortam değişkenleri
├── package.json             # Bağımlılıklar
└── src/
    ├── configs/
    │   └── dbConnection.js           # MongoDB bağlantısı
    ├── models/
    │   └── blog.model.js             # Blog schema ve modeli
    ├── controllers/
    │   └── blog.controller.js        # İş mantığı
    ├── routes/
    │   └── blog.route.js             # API rotaları
    └── middlewares/
        └── errorHandler.js           # Hata yönetimi
```

## Kullanılan Teknolojiler

- Express.js
- MongoDB
- Mongoose
- dotenv

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
node index.js
```

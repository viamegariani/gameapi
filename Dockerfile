# Menggunakan node:14-alpine sebagai base image
FROM node:14-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependensi aplikasi
RUN npm install --production

# Copy semua file aplikasi ke dalam container
COPY . .

# Menjalankan aplikasi saat container dijalankan
CMD ["npm", "start"]

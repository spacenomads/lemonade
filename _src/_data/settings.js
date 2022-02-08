function getYear() {
  return new Date().getFullYear();
}





function getStaticsVersion() {
  const version = new Date()
    .toISOString()
    .replace(/[^A-SU-Y0-9]/g, '');
  return version;
}





module.exports = {
  "author": "Carlos Mañas",
  "email": "carlos@sidiostedalimones.com",
  "lang": "es",
  "long_name": "Si dios te da limones",
  "mode": process.env.MODE,
  "siteDescription": "Si dios te da limones, haces limonada",
  "siteName": "Sidiostedalimones",
  "twitter": "https//twitter.com/oneeyedman",
  "url": "https://sidiostedalimones.com",
  "version": getStaticsVersion(),
  "year": getYear(),
}
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
  "siteName": "Sidiostedalimones",
  "siteDescription": "Si dios te da limones, haces limonada",
  "long_name": "Si dios te da limones",
  "url": "https://sidiostedalimones.com",
  "author": "Carlos Mañas",
  "email": "carlos@sidiostedalimones.com",
  "twitter": "https//twitter.com/oneeyedman",
  "lang": "es",
  "year": getYear(),
  "version": getStaticsVersion()
}
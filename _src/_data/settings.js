function getYear() {
  return new Date().getFullYear();
}





function getStaticsVersion() {
  const version = new Date()
    .toISOString()
    .replace(/[^A-SU-Y0-9]/g, '');
  return version;
}





function getCurrentFormattedDate() {
	const [day, month, year] = new Date()
		.toLocaleDateString('es-ES')
		.split('/');
	return `${year}/${month}/${day}`
}





module.exports = {
  author: 'Carlos Mañas',
  email: 'carlos@sidiostedalimones.com',
	fedi_account: 'https://laterracita.online/@oneeyedman',
  lang: 'es',
  long_name: 'Si dios te da limones',
  mode: process.env.MODE,
  siteDescription: 'Si dios te da limones, haces limonada',
  siteName: 'Sidiostedalimones',
  url: 'https://sidiostedalimones.com',
  version: getStaticsVersion(),
  year: getYear(),
	date: getCurrentFormattedDate(),
	build_date: new Date(),
	post_years: [2023, 2022, 2021]
}

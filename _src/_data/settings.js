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





export default {
  author: 'Carlos Mañas',
  email: 'carlos@sidiostedalimones.com',
	fedi: {
		link: 'https://laterracita.online/@oneeyedman',
		account: '@oneeyedman@laterracita.online',
	},
  lang: 'es',
  long_name: 'Si dios te da limones',
  mode: process.env.MODE,
  siteDescription: 'Si dios te da limones, haces limonada',
  siteName: 'Sidiostedalimones',
  url: 'https://sidiostedalimones.com',
	og: {
		home: {
			img: '/assets/images/brand/og-logo-sidiostedalimones.png',
			alt: 'Limón pixelado centrado, con píxeles gordotes y, debajo, el texto «sidiostedalimones».',
		},
	},
  version: getStaticsVersion(),
  year: getYear(),
	date: getCurrentFormattedDate(),
	build_date: new Date(),
	post_years: [2024, 2023, 2022, 2021]
}

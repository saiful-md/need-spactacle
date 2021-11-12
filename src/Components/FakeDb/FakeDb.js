const products = [
	{
		id: 1,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 5,
		image: 'https://i.ibb.co/Hx6ytVs/product-1.png'
	},
	{
		id: 2,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 7,
		image: 'https://i.ibb.co/pnrnTh2/product-2.png'
	},
	{
		id: 3,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 6,
		image: 'https://i.ibb.co/WKmrsPb/product-3.png'
	},
	{
		id: 4,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 10,
		image: 'https://i.ibb.co/Z8x1L7F/product-4.png'
	},
	{
		id: 5,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 16,
		image: 'https://i.ibb.co/V9myrcc/product-5.png'
	},
	{
		id: 6,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 6,
		image: 'https://i.ibb.co/pRf7hxP/product-6.png'
	},
	{
		id: 7,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 44,
		image: 'https://i.ibb.co/x7bwWb8/product-7.png'
	},
	{
		id: 8,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 23,
		image: 'https://i.ibb.co/BK7nGSx/product-8.png'
	},
	{
		id: 9,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 44,
		image: 'https://i.ibb.co/2dPZZBf/product-9.png'
	},
	{
		id: 10,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 65,
		image: 'https://i.ibb.co/p20cp3K/product-10.png'
	},
	{
		id: 11,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 22,
		image: 'https://i.ibb.co/R7w3LwM/product-11.png'
	},
	{
		id: 12,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 56,
		image: 'https://i.ibb.co/7JzzVT8/product-12.png'
	},
	{
		id: 13,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 73,
		image: 'https://i.ibb.co/qCZj5XH/product-13.png'
	},
	{
		id: 14,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 24,
		image: 'https://i.ibb.co/4NJbKrQ/product-14.png'
	},
	{
		id: 15,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 23,
		image: 'https://i.ibb.co/NTRQGsf/product-15.png'
	},
	{
		id: 16,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 22,
		image: 'https://i.ibb.co/R3mQVyG/product-16.png'
	},
	{
		id: 17,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 12,
		image: 'https://i.ibb.co/5rwpNCN/product-17.png'
	},
	{
		id: 18,
		name: 'Shine spactale',
		description: 'LouisWill Men Sunglasses Sport Sunglasses Lightweight PC',
		price: 19,
		image: 'https://i.ibb.co/dD9MKDv/product-18.png'
	}
];

/* 
https://i.ibb.co/Kjm5m7L/Worried-glasses-with-eyes-icon-isolated-vector-illustration.jpg
https://i.ibb.co/bHm7HZS/banner-1.jpg
https://i.ibb.co/CMNjnWY/Girlfriend-ready-to-investigate-social-profile-of-boyfriend-Portrait-of-good-looking-smart-brunette.jpg
https://i.ibb.co/MZGGth9/Cool-sunglasses-isolated-on-white-background-top-view.jpg
https://i.ibb.co/Hx6ytVs/product-1.png
https://i.ibb.co/pnrnTh2/product-2.png
https://i.ibb.co/WKmrsPb/product-3.png
https://i.ibb.co/Z8x1L7F/product-4.png
https://i.ibb.co/V9myrcc/product-5.png
https://i.ibb.co/pRf7hxP/product-6.png
https://i.ibb.co/x7bwWb8/product-7.png
https://i.ibb.co/BK7nGSx/product-8.png
https://i.ibb.co/2dPZZBf/product-9.png
https://i.ibb.co/p20cp3K/product-10.png
https://i.ibb.co/R7w3LwM/product-11.png
https://i.ibb.co/7JzzVT8/product-12.png
https://i.ibb.co/qCZj5XH/product-13.png
https://i.ibb.co/4NJbKrQ/product-14.png
https://i.ibb.co/NTRQGsf/product-15.png
https://i.ibb.co/R3mQVyG/product-16.png
https://i.ibb.co/5rwpNCN/product-17.png
https://i.ibb.co/dD9MKDv/product-18.png

*/

export interface ProductCharacteristic {
	value: string;
	name: string;
}

export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	description: string;
	characteristics: ProductCharacteristic[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	image: string;
	initialRaiting: number;
	reviews: any[];
	reviewCount: number;
	reviewAvg?: any;
	advantages: string;
}
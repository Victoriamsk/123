
var demo = new Vue({
	el: '#main',
	data: {
        links: ['Features', 'About', 'Pricing', 'Reviews', 'Contacts']
	},
	methods: {
	}
});



var demo = new Vue({
	el: '#social-media',

	data: {
        images: ['facebook', 'twitter', 'google', 'pinterest', 'insta', 'rss']
	},
	methods: {
	}
});

 var demo = new Vue ({
	el: '#sub-list',
	data: {
		items: [
			{
				title: 'Title',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Aenean euismod bibendum laoreet.',
			},
			{
				title: 'Title',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Aenean euismod bibendum laoreet.',
			},
		]
	},
	methods: {
	}
});


var demo = new Vue({
	el: '#awesome',
	data: {
        awesomes: [
            {
        		title: 'Thoughtful Design',
        		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
        	},
            {
        		title: 'Well Crafted',
        		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
        	},
            {
        		title: 'Easy to Customize',
        		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida  dolor sit amet lacus accumsan et viverra.',
        	},
        ]
	},
	methods: {
	}
});

var demo = new Vue ({
	el: '#pricing',
	data: {
		prices: [
			{
				tariff: 'Bacis',
				price: 0,
				term: 'Free for Life',
        		texts: ['1 gb of space', '10 gb of bandwidth', '3 websites', 'basic customization', 'wordpress integration', 'email support'],
        	},
			{
				tariff: 'Professional',
				price: 19,
				term: 'Monthly of Payment',
				note: 'our most popular',
        		texts: ['5 gb of space', '50 gb of bandwidth', '12 websites', 'basic customization', 'wordpress integration', 'email support'],
        	},
			{
				tariff: 'Enterprice',
				price: 70,
				term: 'Monthly of Payment',
        		texts: ['Unlimited space', 'unlimited bandwidth', '100 websites', 'basic customization', 'wordpress integration', 'email support'],
        	},
		]
	},
	methods: {
	}
});

var demo = new Vue({
	el: '#customers',
	data: {
        customers: [
            {
        		name: 'Jeremy H.',
        		job: 'Manager',
				text: 'Lorem ipsum dolor, sit amet consect etur adipisicing elit. Cor nonut sus cipitexplicabo magni, quaerat enim eveniet deleniti!',
        	},
            {
        		name: 'John S.',
        		job: 'Freelancer',
				text: 'Lorem ipsum dolor, sit amet consect etur adipisicing elit. Cor nonut sus cipitexplicabo magni, quaerat enim eveniet deleniti!',
        	},
            {
        		name: 'Susan W.',
        		job: 'Photographer',
				text: 'Lorem ipsum dolor, sit amet consect etur adipisicing elit. Cor nonut sus cipitexplicabo magni, quaerat enim eveniet deleniti!',
        	},
        ]
	},
	methods: {
	}
});

var demo = new Vue({
	el: '#footer',
	data: {
        images: ['facebook', 'twitter', 'google', 'pinterest', 'insta', 'rss']
	},
	methods: {
	}
});

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menubar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

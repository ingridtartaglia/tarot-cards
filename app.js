$(document).ready(function(){
	var tarotCards = [
		{
			name: "The Fool",
			src: "img/0-louco.jpg",
			description: "The Fool represents a new situation that you are feeling very excited about today. " +
						"You may don't know what to expect, so don't be afraid or worried. Have faith in the future and believe in what the Universe will provide. "
		},
		{
			name: "The Magician",
			src: "img/1-mago.jpg",
			description: "The Magician represents your ability to communicate clearly, to 'sell' yourself and to be innovative. " + 
						"You will have all the tools and resources available to manifest your desired outcome, so today it's a good time to use your talents. " +
						"You are skillful and confident in your own abilities." 
		},
		{
			name: "The High Priestess",
			src: "img/2-papisa.jpg",
			description: "The High Priestess represents secrets, magic, mystery, wisdom and the art of making the impossible become possible. " +
						"Make plans that are right for you, not for other people. " +
						"This card can also represent your subconscious, so pay attention to your intuition today."
		},
		{
			name: "The Empress",
			src: "img/3-imperatriz.jpg",
			description: "The Empress represents the feminine power. Maybe you're feeling very attractive, happy and confident today. " +
						"This card also ensures you that it's time to act upon your plans, using your intelligence and leadership."
		},
		{
			name: "The Emperor",
			src: "img/4-imperador.jpg",
			description: "The Emperor represents an authority figure that creates a solid foundation to build and create on. " +
						"It's better to use your logic rather than intuition. Don't be impulsive and plan your actions. " +
						"This card advises that self-control and discipline are the best way forward."
		},
		{
			name: "The Hierophant",
			src: "img/5-papa.jpg",
			description: "The Hierophant is about service and being of service. It's also a card of mentoring and counselling. " +
						 "It reminds you to seek knowledge and find your special place in this world. " +
						 "It's also important to have faith and pray to your spiritual guidance today." 
		},
		{
			name: "The Lovers",
			src: "img/6-enamorados.jpg",
			description: "The Lovers represents the choices you will have to do today. Do the things that makes you feel complete and be with people who make you feel at home. " +
						"This card encourages you to go out there and find yourself, follow your passions, try different things and learn by opposites." 
		},
		{
			name: "The Chariot",
			src: "img/7-carro.jpg",
			description: "The Chariot represents your power and determination. It represents victory through assertiveness. " +
						"Today you may take control in your life or area that needs your attention. Be brave enough to move forward even in unknown territory. " + 
						"This card reminds that you can create your own destiny."
		},
		{
			name: "Justice",
			src: "img/8-justica.jpg",
			description: "When the Justice card shows up, it reminds you to be fair and impartial to achieve the best result. " +
						"Make sure you are keeping to the facts rather than building your arguments purely based on emotions today."
		},
		{
			name: "The Hermit",
			src: "img/9-eremita.jpg",
			description: "The Hermit represents spending time alone, seeking for spiritual guidance. It's a good time to be introspective. " +
			"Maybe you will learn something important today, or share your knowledge and wisdom with others. " 
		},
		{
			name: "Wheel of Fortune",
			src: "img/10-rodafortuna.jpg",
			description: "This card reminds that 'what is meant to be is meant to be'. " +
						"The Wheel of Fortune lets you know that you can allow letting go of some control. Your life will start flowing forward in amazing ways. "
		}, 
		{
			name: "Strength",
			src: "img/11-forca.jpg",
			description: "Strength represents our courage, self-confidence, patience and compassion. You can follow your passions, because anything is possible as long as we believe in ourselves. " +
						"Be patient and use you love instead of force."
		},
		{
			name: "The Hanged Man",
			src: "img/12-enforcado.jpg",
			description: "Maybe your life is on hold, but you can gain a whole new perspective to take you to a next level. " +
						"Reflect upon what is truly important to you. Observe things in a new way, from someone who knows how important life is."
		},
		{
			name: "Death",
			src: "img/13-morte.jpg",
			description: "Today you will have a transformation, endings and new beginnings. Things will not be the same again. " +
						"You are growing up and changing the circumstances you find yourself in. Old habits might have to be shaken off so that you can be reborn again as a new and improved you."
		},
		{
			name: "Temperance",
			src: "img/14-temperanca.jpg",
			description: "Temperance represents balanced interaction between the element to create something fresh new. "
		},
		{
			name: "The Devil",
			src: "img/15-diabo.jpg",
			description: "The Devil our fears that causes addiction and compulsive behaviour. Perhaps today you're feeling very materialistic and ambitious. " +
						"You might find yourself craving more power and money in your life. It's important to say that you may be obsessed with something."
		},
		{
			name: "The Tower",
			src: "img/16-torre.jpg",
			description: "Today you must face the truth about a situation or issue in your life. " + 
						"Living an illusion is not going to work today. You might fall off to find yourself a whole new person, someone who is less likely to be fooled, lied to or taken advantage of. "
		},
		{
			name: "The Star",
			src: "img/17-estrela.jpg",
			description: "The Star represents a hope, a bright future, optimism, serenity and inspiration. You are being the light in someone’s life. " + 
						"Your connections and relationships are experiencing a deeper spiritual bond at the moment. Follow and live your bliss."
		},
		{
			name: "The Moon",
			src: "img/18-lua.jpg",
			description: "The Moon card represents illusions, intuition, fantasies, fears and anxiety. Your insecurities might be running high. " + 
						"Your dreams and intuition are very strong, so pay attention to their messages. The Moon comes with great gifts of creativity and imagination, so today it's also a good time to explore them."
		},
		{
			name: "The Sun",
			src: "img/19-sol.jpg",
			description: "The Sun shows up when you are enjoying your time with the people you love. " + 
						"You'll feel happy and grateful today. And maybe you'll accomplish your today's goals."
		}, 
		{
			name: "Judgement",
			src: "img/20-julgamento.jpg",
			description: "Today you will have an important decision. You're taking responsibility for your own actions and your life. " +
						"This card also shows up a transformation and a new beginning."
		},
		{
			name: "The World",
			src: "img/21-mundo.jpg",
			description: "The World represents a fulfil completion of a cycle. The World shows up when the world is ready for you and want what you have to offer. " +
						"It can also reveals a travel or a goal accomplished. "
		},
	];


	$(".tc-img").click(function(){
		var card = tarotCards[Math.floor(Math.random()*tarotCards.length)];

		$(this).remove();
		$("#tc-placeholder-img").append("<img src='" + card.src + "' class='tc-img img-responsive'>");
		$(".tc-img").addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function(){
				$(this).removeClass('animated flipInY');
			});
		$(".tc-step").remove();
		$("#tc-placeholder-text").append(
			"<p class='tc-subtitle lead'>" + card.name + "</p>" +
			"<p class='tc-text'>" + card.description + "</p>");
	});
});
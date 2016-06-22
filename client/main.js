Template.sentiment.helpers({

	hasText: function() {
        // var text = this.text;
        // console.log(text);
        // var count = text.count();
        // if (count > 0) {
        // 	return ' '
        // } else {
        // 	return 'disabled'
        // }
    },
    sentir: function(){
    	var score = Session.get('r1');
    	if (score < 0){
    		return 'bad.png'
    	} else if(score === 0){
    		return 'neutral.png'
    	}else if(score > 0){
    		return 'happy.png';
    	}else{
    		console.log("Exception to calculate score!")
    		return false;
    	}
    	
    }
});

Template.sentiment.events({
	'click #sentiment' (event, instance) {
		event.preventDefault();
		var text = $('#text').val();
		console.log(text);
		var sentiment = require('sentiment-ptbr');

		var r1 = sentiment(text);

		Session.set( "r1", r1.score );

        console.log(r1);

    },
    'keyup #text'(event, instance){
    	event.preventDefault();
    	var text = $('#text').val();
    	console.log(text);
    	var sentiment = require('sentiment-ptbr');

    	var r1 = sentiment(text);

    	Session.set( "r1", r1.score );

        console.log(r1.score);

    }
});

Template.sentiment.rendered = function() {

	Session.set( "r1", 0 );

}
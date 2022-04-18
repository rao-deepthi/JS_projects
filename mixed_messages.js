/* Greetings
Hello World!
Hey! Hope you are doing great!
A new day and a new world of possibilities. A very good day to you.
May happiness and joy be abundant today in your life.
Hey, sending you love and joy!

Quotes
"Life is 10% what happens to us and 90% how we react to it."
-- Dennis P. Kimbro
"There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures."
-- Josiah Gilbert Holland
"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact."
--William James
"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."
--Erma Bombeck
"Even if you’re on the right track, you’ll get run over if you just sit there."
--Will Rogers
"Nurture your mind with great thoughts. To believe in the heroic makes heroes."
--Benjamin Disraeli

Departing note
Have fun!
Smile and enjoy the day.
Sieze the day!
Take care and stay awesome!
Be the awesome 'you' and enjoy your life!
Get a step closer to your dreams!
*/

const message_Store = {
    greetings : ["Hello World!", 
        "Hey! Hope you are doing great!",
        "A new day and a new world of possibilities. A very good day to you.",
        "May happiness and joy be abundant today in your life.",
        "Hey, sending you love and joy!"],
    inspirational_quote : ["Life is 10% what happens to us and 90% how we react to it.-- Dennis P. Kimbro",
    "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.-- Josiah Gilbert Holland",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. --William James",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.--Erma Bombeck",
    "Even if you're on the right track, you'll get run over if you just sit there.--Will Rogers",
    "Nurture your mind with great thoughts. To believe in the heroic makes heroes. --Benjamin Disraeli", ],
    departing_Note : ["Have fun!",
        "Smile and enjoy the day.",
        "Sieze the day!",
        "Take care and stay awesome!",
        "Be the awesome 'you' and enjoy your life!",
        "Get a step closer to your dreams!"],
    message_Generator(){
        let first_message = this.greetings[Math.floor(Math.random()*this.greetings.length)];
        let second_message = this.inspirational_quote[Math.floor(Math.random()*this.inspirational_quote.length)];
        let third_message = this.departing_Note[Math.floor(Math.random()*this.departing_Note.length)];
        let message = "Welcome!\n-----------------------------------------------------------------------------------------------------\n"+
        first_message+
        "\n"+second_message+"\n"+
        third_message+"\n-----------------------------------------------------------------------------------------------------\nAdios";
        return(message)
    },
};


console.log(message_Store.message_Generator());
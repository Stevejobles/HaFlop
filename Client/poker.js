
class Lobby {

    clientPlayerId;


    players = [];

    tableCards = [];

    currRound = 0;

    startRound() {

        this.currRound++;

        

    }
    
}

class Player {

    id;

    handCards = [];

}



class HandEvaluator {

    sequences = ['RoyalFlush', ''];

    evaluateHands(players, tableCards) {

        let highestPlayerSequences = [];

        players.forEach(player => {

            const cards = [...tableCards, ...player.handCards];


            // check sequences

            let highestFoundSequence;

            for (let i = 0; i < this.sequences.length; i++) {

                const sequence = this.sequences[i];

                const didFindSequence = this['check' + sequence](cards);

                if (didFindSequence) {

                    highestFoundSequence = i;

                    break;

                }

            }

            highestPlayerSequences.push(highestFoundSequence);

        });

        
    }

    checkRoyalFlush(cards) {



    }

}

const cardHierarchy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

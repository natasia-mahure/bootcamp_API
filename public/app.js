document.addEventListener('alpine:init', function () {
    Alpine.data('bootCampWidgets', function () {
        return {
            sentence: '',
            longestWord: '',
            shortestWord: '',
            lengthtWord: '',
            bill: '',
            prices: '',
            totalBill: ' ',
            phonecall: '',
            phonesms: '',
            checkprices: '',
            usage: '',
            available: '',


            checkSentence() {
                axios
                    .get(`http://localhost:3007/api/word_game?sentence=${this.sentence}`)
                    .then((result) => {
                        console.log(result.data);

                        this.longestWord = result.data.longestWord;
                        this.shortestWord = result.data.shortestWord;
                        this.lengthtWord = result.data.sum;
                    });
            },

            totalPhoneBill() {
                console.log('runninf')
                axios
                    .post(`http://localhost:3007/api/phonebill/total`, {
                        bill: this.bill
                    })
                    .then(result => {
                        console.log(result.data);

                        this.totalBill = result.data.total;
                    });

            },

        }
    })
})
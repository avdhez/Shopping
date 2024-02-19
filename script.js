function product1() {
        var phoneNumber = '9414846163';
        var fixedText = 'Hey BHAVESH I Want To order | Product Name : 6 Pocket Jeans | Price: 600rs | On The Adress:  ';
        var userInput = window.prompt('Please Enter your Adress: ');
        if (userInput !== null) {
            var fullMessage = fixedText + '\n' + userInput;
            var encodedMessage = encodeURIComponent(fullMessage);
            var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
            window.open(whatsappLink, '_blank');
        }
    }

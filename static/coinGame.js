function spinCoin() {
        var spinImage = document.getElementById("spinImage");
        var heads = document.getElementById("heads");
        var tails = document.getElementById("tails");
        var spinning = document.getElementById("spinning");
        var spinButton = document.getElementById("spin");
        var headsImage = document.getElementById("headsImage");
        var tailsImage = document.getElementById("tailsImage");

        // Show spinning text
        spinning.hidden = false;
        spinImage.hidden = false;

        spinButton.disabled = true;
        heads.hidden = true;
        headsImage.hidden = true;
        tails.hidden = true;
        tailsImage.hidden = true;

        function randomTime() {
            let time = Math.floor(Math.random() * 10000) + 1000; // Random time between 1 and 10 seconds
            console.log(time);
            return time;
        }

        // Simulate coin spin
        setTimeout(function() {
            // Hide spinning text
            spinning.hidden = true;
            spinImage.hidden = true;

            // Randomly choose heads or tails
            var result = Math.random() < 0.5 ? "heads" : "tails";
            if (result === "heads") {
                heads.hidden = false;
                headsImage.hidden = false;
                tails.hidden = true;
            } else {
                heads.hidden = true;
                tails.hidden = false;
                tailsImage.hidden = false;
            }

            // Enable the spin button again
            spinButton.disabled = false;
        }, randomTime()); // Spin for 2 seconds
    }
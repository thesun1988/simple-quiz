$(document).ready(function() {
    $(".option").click(function() {
        // Disable all options
        $(".option").removeClass("correct");
        $(".option").removeClass("incorrect");

        $(".option").prop("disabled", true);

        // Get the selected answer and the correct answer
        const selectedAnswer = $(this).text().trim();
        const correctAnswer = "Washington DC"; // Replace with the correct answer

        // Check if the answer is correct
        if (selectedAnswer === correctAnswer) {
            // Display correct feedback and make the chosen box green
            $(".feedback").html('<span class="correct-feedback">Correct! Washington DC is the capital of United State of America.</span>');
            $(this).addClass("correct");
           // $(this).addClass("chosen");
        } else {
            // Display incorrect feedback and make the chosen box red
            $(".feedback").html('<span class="incorrect-feedback">Incorrect. The correct answer is Washington DC.</span>');
            $(this).addClass("incorrect");
           // $(this).addClass("chosen");
        }
    });
});

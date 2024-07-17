import { Button, Typography } from "@material-ui/core";
import TestAnswersReview from "./TestAnswersReview";
import { useEffect } from "react";

const QuizResults = ({
  classes,
  resetQuiz,
  currentQuizStep,
  processedAnswers,
  setCurrentQuizStep,
}) => {
  useEffect(() => {
    window.scrollTo(0, "20px");
  }, []);
  return currentQuizStep === "results" ? (
    <div className={classes.results}>
      <Typography variant="h1" className={classes.mainTitle}>
        Results
      </Typography>
      <Typography variant="h4">
        {processedAnswers.filter(({ isCorrect }) => isCorrect).length} out of{" "}
        {processedAnswers.length}
      </Typography>
      <Button
        onClick={(e) => {
          setCurrentQuizStep("review");
        }}
        className={classes.submitButton}
        variant="contained"
        color="primary"
      >
        Review
      </Button>{" "}
      <Button
        onClick={resetQuiz}
        className={classes.submitButton}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </div>
  ) : (
    <TestAnswersReview
      classes={classes}
      resetQuiz={resetQuiz}
      processedAnswers={processedAnswers}
    />
  );
};

export default QuizResults;
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the make of the original Terminator',
			answerOptions: [
				{ answerText: 'Cyberdyne Enterprises Series 800', isCorrect: false },
				{ answerText: 'Skynet System Model T-1000', isCorrect: false },
				{ answerText: 'Cyberdyne Systems Model 101 Series 800', isCorrect: true },
				{ answerText: 'Skynet Class-101 Series 8', isCorrect: false },
		],
		},
		{
			questionText: 'Who invented the neural-net processor that lead to the development of Skynet?',
			answerOptions: [
				{ answerText: 'Michael Belton Dayson', isCorrect: false },
				{ answerText: 'Miles Bennett Dyson', isCorrect: true },
				{ answerText: 'David Brent Miles', isCorrect: false },
				{ answerText: 'Mike Brian Dyles', isCorrect: false },
		],
		},
		{
			questionText: 'In the Galleria Arcade, what game is John playng before the T-1000 finds him?',
			answerOptions: [
				{ answerText: 'Missile Command', isCorrect: true },
				{ answerText: 'Missile Launch', isCorrect: false },
				{ answerText: 'Missile Strike', isCorrect: false },
				{ answerText: 'Missile Battalion', isCorrect: false },
		],
		},
		{
			questionText: 'What is the name of the biker bar that the Terminator obtains his clothes and motorcycle from?',
			answerOptions: [
				{ answerText: 'Last Chance Saloon', isCorrect: false },
				{ answerText: 'The Corral', isCorrect: true },
				{ answerText: 'Dirty Pete\'s', isCorrect: false },
				{ answerText: 'Deadbeat\'s Bar', isCorrect: false },
		],
		},
		{
			questionText: 'To which year is the Terminator sent back by the future John Connor?',
			answerOptions: [
				{ answerText: '1989', isCorrect: false },
				{ answerText: '1997', isCorrect: false },
				{ answerText: '1982', isCorrect: false },
				{ answerText: '1995', isCorrect: true },
		],
		},
		{
			questionText: 'From where do the Terminator and John Connor break Sarah Connor out of?',
			answerOptions: [
				{ answerText: 'Pescadero State Hospital', isCorrect: true },
				{ answerText: 'Long Beach Criminal Asylum', isCorrect: false },
				{ answerText: 'California State Asylum', isCorrect: false },
				{ answerText: 'Los Angeles Psychiatric Hospital', isCorrect: false },
		],
		},
		{
			questionText: 'What is the first thing the Terminator says to Sarah Connor in the hopsital?',
			answerOptions: [
				{ answerText: 'Come with me if you want to live', isCorrect: true },
				{ answerText: 'Listen to me very carefully', isCorrect: false },
			{ answerText: 'I need you to follow me', isCorrect: false },
				{ answerText: 'I know you must be confused', isCorrect: false },
		],
		},
		{
			questionText: 'What are the names of John Connor\'s foster parents?',
			answerOptions: [
				{ answerText: 'James & Vivian Taylor', isCorrect: false },
				{ answerText: 'Vincent & Julia Trentino', isCorrect: false },
				{ answerText: 'Terry & Julie Vale', isCorrect: false },
				{ answerText: 'Todd & Janelle Voight', isCorrect: true },
		],
		},
		{
			questionText: 'What is the name of the company painted on the side of the liquid nitrogen truck?',
			answerOptions: [
				{ answerText: 'Cryogene', isCorrect: false },
				{ answerText: 'Cryocon', isCorrect: false },
				{ answerText: 'Cryoco', isCorrect: true },
				{ answerText: 'Cryofreeze', isCorrect: false },
		],
		},
		{
			questionText: 'How does the Termintor smuggle his shotgun into the shopping mall?',
			answerOptions: [
				{ answerText: 'Inside an unbrella', isCorrect: false },
				{ answerText: 'In a box of flowers', isCorrect: true },
				{ answerText: 'In a rolled up newspaper', isCorrect: false },
				{ answerText: 'Up the sleeve of his jacket', isCorrect: false },
		],
		},
		{
			questionText: 'How much money does John Conner withdraw from the ATM with the stolen bank card?',
			answerOptions: [
				{ answerText: '$250', isCorrect: false },
				{ answerText: '$100', isCorrect: false },
				{ answerText: '$500', isCorrect: false },
				{ answerText: '$300', isCorrect: true },
		],
		},
		{
			questionText: 'What is the T-1000 made of?',
			answerOptions: [
				{ answerText: 'A mimetic poly-alloy', isCorrect: true },
				{ answerText: 'A titanium exo-skeleton', isCorrect: false },
				{ answerText: 'Semi-solid plasma alloy', isCorrect: false },
				{ answerText: 'Hyper-alloyed liquid metal', isCorrect: false },
		],
		},
		{
			questionText: 'When does Skynet become self-aware?',
			answerOptions: [
				{ answerText: 'August 21st, 2035', isCorrect: false },
				{ answerText: '10:15 am Pacific time, July 4th', isCorrect: false },
				{ answerText: '2:14 am Eastern time, August 29th', isCorrect: true },
				{ answerText: 'July 5th, 2035, at 6pm Eastern time', isCorrect: false },
        ],
        },
		{
			questionText: 'Complete the quote from the ending of Terminator 2?',
			answerOptions: [
				{ answerText: 'We hadn\'t planned on coming this far. Only the future was ahead of us', isCorrect: false },
				{ answerText: 'We were in the unknown, trying to find our way in the dark.', isCorrect: false },
				{ answerText: 'We were on our own now, making shit up as we went along.', isCorrect: false },
				{ answerText: 'We were in uncharted territory now, making up history as we went along.', isCorrect: true },
        ],
        },
		];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const answerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

    const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);

		nextQuestion < questions.length ? setCurrentQuestion(nextQuestion) :
			setShowScore(true);
		}

	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

return (  
		
		<>

		
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
		You scored {score} out of {questions.length}
        </div>

			) : (
				<>        
					<div className="headline">THE SUPER-HARD TERMINATOR 2 QUIZ</div>

					<div className='question-section'>
						<div className='question-count'>
							<span className="questionNumber">Question {currentQuestion + 1}</span>/{questions.length}
						</div>

						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>

					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions, index) => (
            <button className="answerButton" onClick={() => answerButtonClick(answerOptions.isCorrect)}>
                {answerOptions.answerText}</button>
            ))}
					</div>
				</>

			)}

		</div>
		</>
	);
}

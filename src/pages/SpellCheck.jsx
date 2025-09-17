import { useState, useEffect } from 'react';

function SpellCheck() {
const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setIsLoading(true);
    setProgress(1);
  };

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // 30ms * 100 = ~3s
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="container">
      {!isLoading ? (
        <>
          <textarea placeholder="Enter text 1" />
          <textarea placeholder="Enter text 2" />
          <button onClick={handleClick}>შედარება</button>
        </>
      ) : (
        <div className="loader">
          <p>{progress}%</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpellCheck;

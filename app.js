let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    let isRunning = false;

    function timeToString(time) {
      let hrs = Math.floor(time / 3600000);
      let mins = Math.floor((time % 3600000) / 60000);
      let secs = Math.floor((time % 60000) / 1000);
      return (
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs)
      );
    }

    function print(txt) {
      document.getElementById("display").innerText = txt;
    }

    function startstop() {
      const btn = document.getElementById("Start");
      if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          print(timeToString(elapsedTime));
        }, 1000);
        btn.innerText = "Pause";
        btn.classList.remove("btn-success");
        btn.classList.add("btn-warning");
        isRunning = true;
      } else {
        clearInterval(timerInterval);
        btn.innerText = "Start";
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-success");
        isRunning = false;
      }
    }

    function reset() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      isRunning = false;
      print("00:00:00");
      document.getElementById("Start").innerText = "Start";
      document.getElementById("Start").classList.remove("btn-warning");
      document.getElementById("Start").classList.add("btn-success");
      document.getElementById("laps").innerHTML = "";
    }

    function lap() {
      if (isRunning) {
        const lapTime = timeToString(elapsedTime);
        const lapItem = document.createElement("li");
        lapItem.className = "list-group-item";
        lapItem.innerText = `Lap: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
      }
    }
function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerHTML = "Please select your date of birth.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const diff = today - birthDate;
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;

  const zodiac = getZodiac(birthDate);
  const nextBirthday = getNextBirthday(birthDate);
  const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  result.innerHTML = `
    <p><strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days</p>
    <p>Total Days: ${totalDays}</p>
    <p>Total Weeks: ${totalWeeks}</p>
    <p>Total Hours: ${totalHours}</p>
    <p>Total Minutes: ${totalMinutes}</p>
    <p>Zodiac Sign: ${zodiac}</p>
    <p>Next Birthday in: ${daysLeft} days</p>
  `;
}

function getZodiac(date) {
  const d = date.getDate();
  const m = date.getMonth() + 1;

  if ((m==3 && d>=21)||(m==4 && d<=19)) return "Aries";
  if ((m==4 && d>=20)||(m==5 && d<=20)) return "Taurus";
  if ((m==5 && d>=21)||(m==6 && d<=20)) return "Gemini";
  if ((m==6 && d>=21)||(m==7 && d<=22)) return "Cancer";
  if ((m==7 && d>=23)||(m==8 && d<=22)) return "Leo";
  if ((m==8 && d>=23)||(m==9 && d<=22)) return "Virgo";
  if ((m==9 && d>=23)||(m==10 && d<=22)) return "Libra";
  if ((m==10 && d>=23)||(m==11 && d<=21)) return "Scorpio";
  if ((m==11 && d>=22)||(m==12 && d<=21)) return "Sagittarius";
  if ((m==12 && d>=22)||(m==1 && d<=19)) return "Capricorn";
  if ((m==1 && d>=20)||(m==2 && d<=18)) return "Aquarius";
  return "Pisces";
}

function getNextBirthday(birthDate) {
  const today = new Date();
  const next = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (next < today) next.setFullYear(today.getFullYear() + 1);
  return next;
}

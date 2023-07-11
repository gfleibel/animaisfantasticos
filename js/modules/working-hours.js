export default function initWorkingHours(){
  const workingHours = document.querySelector('[data-semana]');
  const weekDays = workingHours.dataset.semana.split(',').map(Number);
  const weekHours = workingHours.dataset.horario.split(',').map(Number);

  const now = new Date();
  const todayDay = now.getDay();
  const todayHour = now.getHours();

  const openWeek = weekDays.indexOf(todayDay) !== -1;
  const openHour = (todayHour >= weekHours[0] && todayHour < weekHours[1]);

  if(openWeek && openHour){
    workingHours.classList.add('open');
  } else {
    workingHours.classList.remove('open');
  }
}

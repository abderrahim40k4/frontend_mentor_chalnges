function toggleAnswer(index) {
    var answer = document.getElementById('answer' + index);
    var icon = document.getElementById('icon' + index);
    var iconb = document.getElementById('iconb' + index);
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      icon.style.display= 'none';
      iconb.style.display= 'block';
    } else {
      answer.style.display = 'none';
      icon.style.display= 'block';
      iconb.style.display= 'none';
    }
  }
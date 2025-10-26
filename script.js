(() => {
  const inputText = document.getElementById('inputText');
  const showButton = document.getElementById('showButton');
  const changeBgButton = document.getElementById('changeBgButton');
  const displayArea = document.getElementById('displayArea');
  const tableBody = document.querySelector('#dataTable tbody');

  const bgColors = ['lightblue', 'lightgreen', 'lightcoral'];
  let currentColorIndex = 0;

  const updateShowButtonVisibility = () => {
    showButton.style.display = tableBody.rows.length >= 3 ? 'none' : 'inline-block';
  };

  const deleteTableRow = (rowElement) => {
    rowElement.remove();
    updateShowButtonVisibility();
  };

  const addTableRow = (text) => {
    if (tableBody.rows.length >= 3) return;

    const newRow = tableBody.insertRow();
    const textCell = newRow.insertCell();
    const actionCell = newRow.insertCell();

    textCell.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.onclick = () => deleteTableRow(newRow);

    actionCell.appendChild(deleteButton);

    updateShowButtonVisibility();
  };

  showButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text === '') {
      alert('入力値が空です。');
      return;
    }
    displayArea.textContent = text;
    displayArea.classList.toggle('highlight');
    addTableRow(text);
    console.log('--- ループ表示 ---');
    for (let i = 1; i <= 5; i++) {
      console.log(`ループ回数: ${i}`);
    }
    inputText.value = '';
  });

  changeBgButton.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
    document.body.style.backgroundColor = bgColors[currentColorIndex];
  });

  updateShowButtonVisibility();
})();

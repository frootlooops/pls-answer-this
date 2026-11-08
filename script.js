const demoAccount = {
  name: "John Evven Sacapano",
  email: "john.sacapano@mapua.edu.ph",
  pass: "123456",
  baseBalance: 5000.00,
  transactions: [
    { id: 1, title: 'Cafeteria Lunch', amount: 180.00, type: 'expense', date: '2026-10-14', category: 'Food & Dining' },
    { id: 2, title: 'Weekly Allowance', amount: 2500.00, type: 'income', date: '2026-10-12', category: 'Allowance & Salary' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('fintrack_users')) {
    const users = {};
    users[demoAccount.email.toLowerCase()] = demoAccount;
    localStorage.setItem('fintrack_users', JSON.stringify(users));
  }

  const dateInput = document.getElementById('tx-date');
  if (dateInput) {
    dateInput.valueAsDate = new Date();
  }

  document.getElementById('login-email').value = demoAccount.email;
  document.getElementById('login-pass').value = demoAccount.pass;
});

function getUsersDB() {
  return JSON.parse(localStorage.getItem('fintrack_users') || '{}');
}

function saveUsersDB(users) {
  localStorage.setItem('fintrack_users', JSON.stringify(users));
}

function handleSignUp(e) {
  e.preventDefault();
  
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const balance = parseFloat(document.getElementById('signup-balance').value) || 0;
  const pass = document.getElementById('signup-pass').value;

  const users = getUsersDB();

  if (users[email]) {
    alert('An account with this email address already exists!');
    return;
  }

  const newUser = {
    name: name,
    email: email,
    pass: pass,
    baseBalance: balance,
    transactions: []
  };

  users[email] = newUser;
  saveUsersDB(users);

  currentUser = newUser;
  updateUserHeader();
  switchView('dashboard');
}


function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass = document.getElementById('login-pass').value;

  const users = getUsersDB();
  const user = users[email];

  if (user && user.pass === pass) {
    currentUser = user;
    updateUserHeader();
    switchView('dashboard');
  } else {
    alert('Invalid email or password. Try registering a new account!');
  }
}

function handleLogout() {
  currentUser = null;
  document.getElementById('main-header').style.display = 'none';
  document.getElementById('main-nav').style.display = 'none';
  switchView('login');
}

function updateUserHeader() {
  if (!currentUser) return;

  document.getElementById('main-header').style.display = 'flex';
  document.getElementById('main-nav').style.display = 'flex';

  document.getElementById('user-greeting').textContent = `Welcome, ${currentUser.name.split(' ')[0]}`;

  const nameParts = currentUser.name.split(' ');
  let initials = nameParts[0].charAt(0).toUpperCase();
  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
  }
  document.getElementById('user-avatar').textContent = initials;
}

function switchView(viewId) {
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  const activeNav = document.getElementById(`nav-btn-${viewId}`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  if (viewId === 'dashboard' || viewId === 'transactions') {
    renderAppData();
  }
}

// Add New Transaction Handler
function handleNewTransaction(e) {
  e.preventDefault();
  if (!currentUser) return;

  const title = document.getElementById('tx-title').value;
  const amount = parseFloat(document.getElementById('tx-amount').value);
  const date = document.getElementById('tx-date').value;
  const type = document.getElementById('tx-type').value;
  const category = document.getElementById('tx-category').value;

  const newTx = {
    id: Date.now(),
    title,
    amount,
    type,
    date,
    category
  };

  currentUser.transactions.unshift(newTx);

  // Sync to local DB
  const users = getUsersDB();
  users[currentUser.email] = currentUser;
  saveUsersDB(users);

  renderAppData();

  const summaryDetails = document.getElementById('summary-card-details');
  summaryDetails.innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
      <span style="color: var(--text-muted);">Title</span>
      <span style="font-weight: 600;">${title}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
      <span style="color: var(--text-muted);">Amount</span>
      <span style="font-weight: 700; color: ${type === 'income' ? 'var(--accent-green)' : 'var(--accent-red)'};">${type === 'income' ? '+' : '-'}₱${amount.toFixed(2)}</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
      <span style="color: var(--text-muted);">Category</span>
      <span style="font-weight: 600;">${category}</span>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <span style="color: var(--text-muted);">Date</span>
      <span style="font-weight: 600;">${date}</span>
    </div>
  `;

  document.getElementById('txForm').reset();
  document.getElementById('tx-date').valueAsDate = new Date();

  switchView('summary');
}

// Render dynamic user balance and transaction items
function renderAppData() {
  if (!currentUser) return;

  let totalIncome = 0;
  let totalExpense = 0;

  currentUser.transactions.forEach(tx => {
    if (tx.type === 'income') {
      totalIncome += tx.amount;
    } else {
      totalExpense += tx.amount;
    }
  });

  const netBalance = currentUser.baseBalance + totalIncome - totalExpense;

  document.getElementById('total-balance').textContent = `₱${netBalance.toFixed(2)}`;
  document.getElementById('stat-income').textContent = `+₱${totalIncome.toFixed(2)}`;
  document.getElementById('stat-expense').textContent = `-₱${totalExpense.toFixed(2)}`;

  const dashList = document.getElementById('dashboard-tx-list');
  dashList.innerHTML = generateTxHTML(currentUser.transactions.slice(0, 3));

  const fullList = document.getElementById('full-tx-list');
  fullList.innerHTML = generateTxHTML(currentUser.transactions);

  document.getElementById('tx-count').textContent = `${currentUser.transactions.length} items`;
}

function generateTxHTML(txArray) {
  if (!txArray || txArray.length === 0) {
    return `<div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">No transactions recorded.</div>`;
  }

  return txArray.map(tx => {
    let iconClass = 'fa-solid fa-bag-shopping';
    if (tx.category === 'Food & Dining') iconClass = 'fa-solid fa-utensils';
    if (tx.category === 'Bills & Utilities') iconClass = 'fa-solid fa-bolt';
    if (tx.category === 'Transport') iconClass = 'fa-solid fa-car';
    if (tx.category === 'Allowance & Salary') iconClass = 'fa-solid fa-wallet';

    return `
      <div class="tx-item">
        <div class="tx-info">
          <div class="tx-icon ${tx.type}">
            <i class="${iconClass}"></i>
          </div>
          <div class="tx-details">
            <h4>${tx.title}</h4>
            <span>${tx.category} • ${tx.date}</span>
          </div>
        </div>
        <div class="tx-amount ${tx.type}">
          ${tx.type === 'income' ? '+' : '-'}₱${tx.amount.toFixed(2)}
        </div>
      </div>
    `;
  }).join('');
}

function filterTransactions(query) {
  if (!currentUser) return;
  const filtered = currentUser.transactions.filter(tx => 
    tx.title.toLowerCase().includes(query.toLowerCase()) ||
    tx.category.toLowerCase().includes(query.toLowerCase())
  );
  document.getElementById('full-tx-list').innerHTML = generateTxHTML(filtered);
}
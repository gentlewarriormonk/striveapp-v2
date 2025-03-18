// In app/ThemeProvider.tsx
useEffect(() => {
  const root = window.document.documentElement;
  
  // Remove the class method
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  
  // You could also try data-attribute method which might work better with Tailwind 4
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
  }
  
  localStorage.setItem(storageKey, theme);
}, [theme, storageKey]);

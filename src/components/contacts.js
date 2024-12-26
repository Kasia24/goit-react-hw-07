// api/contacts.js

// Pobieranie listy kontaktów
export const fetchContacts = async () => {
  const token = localStorage.getItem("token"); // Pobieranie tokenu JWT z localStorage
  const response = await fetch("https://connections-api.goit.global/contacts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Dodajemy token w nagłówkach
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  const data = await response.json();
  return data;
};

// Dodanie nowego kontaktu
export const addContact = async (newContact) => {
  const token = localStorage.getItem("token"); // Pobieramy token
  const response = await fetch("https://connections-api.goit.global/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact), // Przekazujemy dane kontaktu w ciele zapytania
  });

  if (!response.ok) {
    throw new Error("Failed to add contact");
  }

  const data = await response.json();
  return data;
};

// Usunięcie kontaktu
export const deleteContact = async (contactId) => {
  const token = localStorage.getItem("token"); // Pobieramy token
  const response = await fetch(
    `https://connections-api.goit.global/contacts/${contactId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete contact");
  }

  const data = await response.json();
  return data;
};

// Aktualizacja kontaktu (np. oznaczenie jako ukończony)
export const updateContact = async (contactId, updatedData) => {
  const token = localStorage.getItem("token"); // Pobieramy token
  const response = await fetch(
    `https://connections-api.goit.global/contacts/${contactId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Przekazujemy dane, które chcemy zaktualizować
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update contact");
  }

  const data = await response.json();
  return data;
};

interface Form {
  name: string;
  email: string;
}

export const saveUser = (body: Form) => {
  return fetch(`/api/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
};

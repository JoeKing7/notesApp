import journalApi from "../../../../api/journalApi";
// export const myAction = async ({commit}) => {
// }

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  if (!data) {
    commit("setEntries", []);
    return;
  }
  const entries = [];
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  await journalApi.put(`/entries/${id}.json`, dataToSave);

  commit("updateEntries", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { data: resp } = await journalApi.post(`/entries.json`, entry);
  entry.id = resp.name;
  commit("createEntries", entry);
  return entry.id;
};

export const deleteEntry = async ({ commit }, entryId) => {
  await journalApi.delete(`/entries/${entryId}.json`);
  commit("deleteEntry", entryId);
  return entryId;
};

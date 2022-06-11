// export const myMutation = (state) => {};

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntries = (state, entryUpd) => {
  const ind = state.entries.findIndex((ent) => ent.id == entryUpd.id);
  state.entries[ind] = entryUpd;
};

export const createEntries = (state, entrySav) => {
  state.entries = [entrySav, ...state.entries];
};

export const deleteEntry = (state, entryDel) => {
  state.entries = state.entries.filter((ent) => ent.id !== entryDel);
};

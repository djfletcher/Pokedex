export const fetchAllPokemon = () => (
  $.ajax ({
    method: "GET",
    url: "/api/pokemon"
  })
);

export const fetchPoke = poke => (
  $.ajax ({
    method: "GET",
    url: `/api/pokemon/${poke.id}`
  })
);

import http from '../../../shared/services/http-common';

export class pokemonApiService {
    getPokemonById(id) {
        return http.get(`/pokemon/${id}`);
    }

    getPokemonByName(name) {
        return http.get(`/pokemon/${name}`);
    }
}
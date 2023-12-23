import http from '../../../shared/services/http-common';

export class pokemonApiService {
    getPokemonById(id) {
        return http.get(`/pokemon/${id}`);
    }

    getPokemonByName(name) {
        return http.get(`/pokemon/${name}`);
    }

    getPokemonByRandomIdRange(max) {
        const randomId = Math.floor(Math.random() * (max + 1));
        return http.get(`/pokemon/${randomId}`);
    }
}
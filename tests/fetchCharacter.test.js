require('../mocks/fetchSimulator');
// const { response } = require('../mocks/character');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verify Wonder Woman character name', async () => {
    const character = await fetchCharacter(720);
    const { name } = character;
    expect(name).toEqual('Wonder Woman');
  });

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    await expect(failRequest).toEqual(new Error('You must provide an url'))
  });

  it('Verifica se retonra \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('qualquer');
    console.log(response);
    expect(response).toBe('Invalid id');
  })

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});

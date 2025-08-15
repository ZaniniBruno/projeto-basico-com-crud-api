import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User, { Prato } from '../../models/prato-model';
class EditarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, cozinha, preco, descricao } = httpRequest.body;
    try {
      const prato = await Prato.findByPk(id);
      if (!prato) {
        return {
          statusCode: 404,
          body: { error: 'Prato não encontrado' },
        };
      }
      await prato.update({
        id,
        nome,
        cozinha,
        preco,
        descricao,});
      return {
        statusCode: 200,
        body: prato,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default EditarPratoController;

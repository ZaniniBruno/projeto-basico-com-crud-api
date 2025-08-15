import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import ListarPratoController from "../controllers/prato/listar-prato";

export default (router: Router): void => {
  /**
   * @swagger
   * /api/pratos/{id}:
   *   get:
   *     summary: Retorna um prato específico
   *     tags: [Pratos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: ID do prato
   *     responses:
   *       200:
   *         description: Prato retornado com sucesso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   description: ID do prato 
   *                 nome:
   *                   type: string
   *                 cozinha:
   *                   type: string
   *                 descricao_resumida:
   *                   type: string
   *                 descricao_detalhada:
   *                   type: string
   *                 imagem:
   *                   type: string
   *                 valor:
   *                   type: number
   */
  router.get(
    "/pratos/:id",
    authMiddleware,
    adaptRoute(new ListarPratoController())
  );
};

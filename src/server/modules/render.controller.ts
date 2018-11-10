import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';
import renderApp from './renderApp';

const indexFilePath = path.resolve(__dirname, '../../../public/index.html');
// read it at start up, should always have it in memory
const indexFile = readFileSync(indexFilePath, 'utf-8');

@Controller()
class RenderController {
  /**
   * Accepts all requests for rendering a route.
   */
  @Get('/*')
  public async render(@Req() request, @Res() response): Promise<void> {
    // TODO: handle favicon.ico
    const app = renderApp(request.url);

    response
      .status(HttpStatus.OK)
      .send(indexFile.replace('<div id="app"></div>', `<div id="app">${app}</div>`));
  }
}

export default RenderController;

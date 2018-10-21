import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';

import renderApp from './renderApp';

const indexFilePath = path.resolve('./build/index.html');
// read it at start up, should always have it in memory
const indexFile = readFileSync(indexFilePath, 'utf-8');

@Controller()
class RenderController {
  /**
   * Accepts all requests for rendering a route.
   */
  @Get('/*')
  public async render(@Req() request): Promise<void> {
    const app = renderApp(request.url);

    request
      .status(HttpStatus.OK)
      .send(indexFile.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  }
}

export default RenderController;

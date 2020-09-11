import { Controller, Get, Res } from "@nestjs/common";

@Controller('/')
export class RenderController {
    @Get()
    index(@Res() res) {
        res.render('index', { state: JSON.stringify({}) })
    }
}

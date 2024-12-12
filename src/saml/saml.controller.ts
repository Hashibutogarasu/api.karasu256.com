import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('saml')
export class SamlController {
  @Get('metadata')
  async metadata(@Req() req, @Res() res) {
    res.set('Content-Type', 'text/xml');

    res.send(`
    <samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="Request ID" Version="2.0" IssueInstant="2004-12-05T09:21:59Z" AssertionConsumerServiceIndex="1">
      <saml:Issuer>https://sp.saas.com</saml:Issuer>
      <samlp:NameIDPolicy AllowCreate="true" Format="urn:oasis:names:tc:SAML:2.0:nameid-format:transient" />
      <samlp:RequestedAuthnContext Comparison="exact">
      <saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml:AuthnContextClassRef>
      </samlp:RequestedAuthnContext>
    </samlp:AuthnRequest>
    `);
  }
}

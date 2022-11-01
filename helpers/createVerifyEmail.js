const { BASE_URL } = process.env;

const createVerifyEmail = (to, verificationToken) => {
  const mail = {
    to,
    subject: "Mail verification by ProTest",
    html: `<div class=""><div class="aHl"></div><div id=":13t" tabindex="-1"></div><div id=":13i" class="ii gt" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."><div id=":13h" class="a3s aiL msg-4758703659254267992"><div class="adM">
</div><u></u>


  
  
  

<div dir="ltr" style="height:100%;margin:0;line-height:1.4;background-color:#f2f4f6;color:#74787e;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:100%">
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:100%;margin:0;padding:0;background-color:#f2f4f6" bgcolor="#F2F4F6">
    <tbody><tr>
      <td align="center" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:100%;margin:0;padding:0">
          
          <tbody><tr>
            <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;padding:25px 0;text-align:center" align="center">
              <a href="" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;font-size:16px;font-weight:bold;color:#2f3133;text-decoration:none" target="_blank">
                
                  Pro Test QA Engineer quiz
                
                </a>
            </td>
          </tr>
          
          <tr>
            <td width="100%" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:100%;margin:0;padding:0;border-top:1px solid #edeff2;border-bottom:1px solid #edeff2;background-color:#fff" bgcolor="#FFF">
              <table class="m_-4758703659254267992email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:570px;margin:0 auto;padding:0">
                
                <tbody><tr>
                  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;padding:35px">
                    
                      <h1 style="margin-top:0;color:#2f3133;font-size:19px;font-weight:bold;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">Hi Guest,</h1>
                    
                    
                                              <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">Hey! We're glad you signed up!</p>
                                          

                    
                    

                    
                    

                    
                    
                                              <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">To get started, please click here:</p>
                        
                        <u></u>
                          <table align="center" cellpadding="0" cellspacing="0" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:100%;margin:30px auto;padding:0;text-align:center" width="100%">
                            <tbody><tr>
                              <td align="center" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">
                                <a href="${BASE_URL}/api/auth/users/verify/${verificationToken}" class="m_-4758703659254267992button" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;display:inline-block;width:200px;border-radius:3px;color:#ffffff;font-size:15px;line-height:45px;text-align:center;text-decoration:none;background-color:#ff751d" target="_blank">
                                  Confirm your account
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <u></u>
                                          

                    
                    

                    
                                              <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">PS: if you do not register an account on ProTest, please ignore this letter.</p>
                                          

                    
                      <p style="margin-top:0;color:#74787e;font-size:16px;line-height:1.5em;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">
                        Sincerely,
                        <br>
                        ProTest development team.
                      </p>
                    
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
          <tr>
            <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box">
              <table class="m_-4758703659254267992email-footer" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;width:570px;margin:0 auto;padding:0;text-align:center">
                <tbody><tr>
                  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;padding:35px">
                    <p style="margin-top:0;line-height:1.5em;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box;color:#aeaeae;font-size:12px;text-align:center">
                      © 2022 <a href="" style="color:#3869d4;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;box-sizing:border-box" target="_blank" >ProTest QA Engineer quiz</a>. All rights reserved.
                    </p>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
  </tbody></table><div class="yj6qo"></div><div class="adL">
</div></div><div class="adL">

</div></div></div><div id=":13x" class="ii gt" style="display:none"><div id=":13y" class="a3s aiL "></div></div><div class="hi"></div></div>`,
  };
  return mail;
};

module.exports = createVerifyEmail;

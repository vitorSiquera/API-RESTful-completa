const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Obter token do header
  const token = req.header('x-auth-token');

  // Verificar se o token existe
  if (!token) {
    return res.status(401).json({ msg: 'Sem token, autorização negada' });
  }

  // Verificar token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};
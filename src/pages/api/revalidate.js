export default async function handler(req, res) {
  try {
    await res.revalidate(req.query.page==='initial'?'/':`/${req.query.page}`);
    return res.json({revalidated: true});
  } catch (err) {
    return res.json({status: 500, error: 'failed to validate'});
  }
}

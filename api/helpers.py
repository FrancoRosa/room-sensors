def to_timestamp(str):
  try:
    return datetime.datetime.fromtimestamp(int(str))
  except:
    return datetime.datetime.now()
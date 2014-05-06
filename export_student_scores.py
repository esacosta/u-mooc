from google.appengine.ext import db
from google.appengine.tools import bulkloader
from models import entities
from models import models



class StudentAnswersEntityExporter(bulkloader.Exporter):
    def __init__(self):
        bulkloader.Exporter.__init__(self, 'StudentAnswersEntity',
				[('__key__',lambda key:key.name(), None),
#                                 ('name',str, None),
				 ('data', str,None),
				 ])

exporters = [StudentAnswersEntityExporter]




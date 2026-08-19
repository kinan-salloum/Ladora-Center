from modeltranslation.translator import translator , TranslationOptions
from .models import Project

class ProjectTranslationOptions(TranslationOptions):
    fields = ('title','desciption',)

translator.register(Project,ProjectTranslationOptions)
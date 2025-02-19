from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import ChatmessagesCreateForm
from .models import *
# Create your views here.


@login_required
def chat_view(request):
    chat_group = get_object_or_404(ChatGroup, group_name = 'public-chat')
    chat_messages = chat_group.chat_messages.all()[:30]
    form  = ChatmessagesCreateForm()


    if request.htmx:
        form  =  ChatmessagesCreateForm(request.POST)
        if form.is_valid():
            message = form.save(commit=False)
            message.author = request.user
            message.group = chat_group
            message.save()
            context = {
                'message': message,
                'user': request.user
            }
            return render (request, "a_rtchat/partials/chat_messages_p.html",context )

    return render(request, 'a_rtchat/chat.html', {'chat_messages' : chat_messages, 'form' : form})
import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full bg-white rounded-2xl  overflow-hidden p-4 py-14">
        <div>
          <p className="w-full text-center text-2xl pb-5 font-semibold">
            Visit on This Address{" "}
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191639.9170681949!2d79.39528427727723!3d28.33145844709081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1738749441302!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] max-sm:h-[350px] rounded-2xl border border-gray-400 shadow-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
